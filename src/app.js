import { showAlert } from "./messages";
import $ from "jquery";
import { v4} from "uuid";

import "./styles.scss";

document.getElementById("btn-alert")
.addEventListener("click", showAlert);

$("#btn-jq").click(() => alert (v4()));