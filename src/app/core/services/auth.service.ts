import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";

export interface Credentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private userData: any;

    constructor(private fireAuth: AngularFireAuth) {
    }

    login(credentials: Credentials) {
        return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(userCredential => this.userData = userCredential.user);
    }

    register(credentials: Credentials) {
        return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    }

    get user() {
        return this.userData;
    }

    logout() {
        return this.fireAuth.signOut();
    }

    isLoggedIn() {
        return !!this.userData;
    }
}