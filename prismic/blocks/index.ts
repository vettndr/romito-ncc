import { connect as DefaultConnector } from "./Default"
import { connect as TextAndImageConnector } from "./TextAndImage"
import { connect as TextAndServicesConnector } from "./TextAndServices"
import { connect as TextConnector } from "./Text"

export const connectors = {
  Default: DefaultConnector,
  TextAndImage: TextAndImageConnector,
  TextAndServices: TextAndServicesConnector,
  Text: TextConnector,
}
