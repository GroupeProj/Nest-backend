import { Image } from './models/image.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Controlenv } from 'src/models/controlenv.model';
import { Membreequipe } from 'src/models/membreequipe.model';
import { Operateur } from 'src/models/operateur.model';
import { Site } from 'src/models/site.model';
import { Synthese } from 'src/models/synthese.model';
import { Utilisateur } from 'src/models/utilisateur.model';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { ControlenvModule } from './controlenv/controlenv.module';
import { EquipeModule } from './equipe/equipe.module';
import { ImageModule } from './image/image.module';
import { MembreequipeModule } from './membreequipe/membreequipe.module';
import { OperateurModule } from './operateur/operateur.module';
import { SiteModule } from './site/site.module';
import { SyntheseModule } from './synthese/synthese.module';
import { RapportModule } from './rapport/rapport.module';
import { Rapport } from './models/rapport.model';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthModule } from './auth/auth.module';
import { Equipe } from './models/equipe.model';
import { ConclusionModule } from './conclusion/conclusion.module';


@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt'}),

    MulterModule.register({dest: './uploads'}),
    
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
<<<<<<< HEAD
      password: 'root',
      database: 'rapDB',
=======
      password: 'P@stgree50_50',
      database: 'pgAdminBD',
>>>>>>> d03f343c7a3f99e0a3574340007527bd0135dbc7
      autoLoadModels: true,
     synchronize : true,
      models:[
        Controlenv,
        Equipe,
        Membreequipe,
        Operateur,
        Site,
        Synthese ,
        Utilisateur,
        Image,
        Rapport,
      ]
    }),
    
    UtilisateurModule,
    
    ControlenvModule,
    
    EquipeModule,
    
    ImageModule,
    
    MembreequipeModule,
    
    OperateurModule,
    
    SiteModule,
    
    SyntheseModule,
    
    RapportModule,
    
    AuthModule,
    
    ConclusionModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
