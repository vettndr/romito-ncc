import { connect as DefaultConnector } from "./Default"
import { connect as TextAndImageConnector } from "./TextAndImage"

export const connectors = {
  Default: DefaultConnector,
  TextAndImage: TextAndImageConnector,
}
