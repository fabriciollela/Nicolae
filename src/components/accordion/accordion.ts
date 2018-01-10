import { Component, ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { NavController, ToastController, ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { Horario } from '../../models/horario';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent implements OnInit {

  accordionExapanded = false;
  @ViewChild("cc") cardContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  horarioListRef$: FirebaseListObservable<Horario[]>

  constructor(public renderer: Renderer,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
    private database: AngularFireDatabase,
    private ActionSheetCtrl: ActionSheetController,
    public authData: AuthProvider) {
      
    // Get current user Id
    var currentUserId = this.authData.afAuth.auth.currentUser.uid;
    this.horarioListRef$ = this.database.list(`/student/${currentUserId}/2011/horarios/`);
  }

  ngOnInit() {
    console.log(this.cardContent.nativeElement);
    this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 500ms, padding 500ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

}