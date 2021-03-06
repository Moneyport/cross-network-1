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
 */
import { ExtensionList } from './extensionList'

/**
 * The object sent in the PUT /transactions/{ID} callback.
 */
export interface TransactionsIDPutResponse {
    /**
     * Time and date when the transaction was completed.
     */
  completedTimestamp?: string
    /**
     * State of the transaction.
     */
  transactionState: string
    /**
     * Optional redemption information provided to Payer after transaction has been completed.
     */
  code?: string
  extensionList?: ExtensionList
}
