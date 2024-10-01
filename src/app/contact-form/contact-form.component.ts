import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Message } from '../../models/message.model';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SignupFormComponent } from "../signup-form/signup-form.component";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, FooterComponent, HeaderComponent, SignupFormComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  isSubmitted: boolean = false

  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit(contactForm: NgForm): void {
    this.isSubmitted = true
    if (contactForm.valid) {
      console.log('Formulaire envoyé !', this.newMessage);
      contactForm.reset()
      this.isSubmitted = false
    } else {
      console.log('Formulaire invalide');
    }
  }

}
