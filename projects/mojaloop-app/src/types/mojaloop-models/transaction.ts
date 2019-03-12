/**
 * Open API for FSP Interoperability (FSPIOP) (Implementation Friendly Version)
 * Based on [API Definition version 1.0](https://github.com/mojaloop/mojaloop-specification/blob/develop/API%20Definition%20v1.0.pdf).  **Note:** The API supports a maximum size of 65536 bytes (64 Kilobytes) in the HTTP header.
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { ExtensionList } from './extensionList';
import { Money } from './money';
import { Party } from './party';
import { TransactionType } from './transactionType';


/**
 * Data model for the complex type Transaction. The Transaction type is used to carry end-to-end data between the Payer FSP and the Payee FSP in the ILP Packet. Both the transactionId and the quoteId in the data model are decided by the Payer FSP in the POST /quotes request.
 */
export interface Transaction { 
    /**
     * ID of the transaction, the ID is decided by the Payer FSP during the creation of the quote.
     */
    transactionId: string;
    /**
     * ID of the quote, the ID is decided by the Payer FSP during the creation of the quote.
     */
    quoteId: string;
    payee: Party;
    payer: Party;
    amount: Money;
    transactionType: TransactionType;
    /**
     * Memo associated to the transaction, intended to the Payee.
     */
    note?: string;
    extensionList?: ExtensionList;
}