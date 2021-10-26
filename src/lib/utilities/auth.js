import { firebase } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const fireAuth = getAuth(firebase);
