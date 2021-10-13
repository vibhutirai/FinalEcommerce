import { LightningElement, wire } from 'lwc';
import getOpportunityForOrderHistory from '@salesforce/apex/controller.getOpportunityForOrderHistory';
import getOpportunityForCart from '@salesforce/apex/controller.getOpportunityForCart';



export default class OrderHistoryPage extends LightningElement {
   
    @wire(getOpportunityForOrderHistory) orderHistory;
   @wire (getOpportunityForCart) cartData;

   


   }