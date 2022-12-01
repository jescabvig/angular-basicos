import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ //que cosas contiene este modulo, (ej: componentes)
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //cosas que quiero que sean visibles/publicas fuera de este modulo
        ListadoComponent
    ],
    imports: [ //todos los modulos
        CommonModule
    ]

})
export class HeroesModule{

}