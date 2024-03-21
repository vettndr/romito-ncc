import { connect as DefaultConnector } from "./Default"
import { connect as TextAndImageConnector } from "./TextAndImage"
import { connect as TextAndServicesConnector } from "./TextAndServices"
import { connect as TextConnector } from "./Text"
import { connect as ServicesConnector } from "./Services"
import { connect as FaqConnector } from "./Faq"

export const connectors = {
  Default: DefaultConnector,
  TextAndImage: TextAndImageConnector,
  TextAndServices: TextAndServicesConnector,
  Text: TextConnector,
  Services: ServicesConnector,
  Faq: FaqConnector,
}
