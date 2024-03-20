import { connect as DefaultConnector } from "./Default"
import { connect as TextAndImageConnector } from "./TextAndImage"
import { connect as TextAndServicesConnector } from "./TextAndServices"

export const connectors = {
  Default: DefaultConnector,
  TextAndImage: TextAndImageConnector,
  TextAndServices: TextAndServicesConnector,
}
