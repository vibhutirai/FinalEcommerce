import { LightningElement,track,wire } from 'lwc';
import CartData from '@salesforce/apex/controller.getOpportunityForCart';
import checkoutData from '@salesforce/apex/controller.getOpportunityForCheckout';
import sumAmount from '@salesforce/apex/controller.sumAmount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CartSummary extends LightningElement {

    @wire (CartData) oppCart;
    @wire (sumAmount) sum;

           handleCheckout(event){
            console.log(event);
            checkoutData()                
            .then(result=>{
                const evt = new ShowToastEvent({
                    title: 'Successfully!!!',
                    message: 'Products Executed Sucessfully',
                    variant: 'success',
                    mode: 'dismissable'
                });
                this.dispatchEvent(evt);
            }) 
             .catch(error =>{
                console.log('Error: ', error);
            })


            
        }

}