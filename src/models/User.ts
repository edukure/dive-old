import Adapters from 'next-auth/adapters';
/* 
  name, email, image, emailVerified são os campos padrão do UserModel
  squad: squad atual do scuba
  id_alura: estava no arquivo do IG-11, mas não sei qual a utilidade
  id_discord: serve para identificação do scuba para o IG-11
  aluraUser: nome de usuário da alura
  
  related issue: https://github.com/nextauthjs/next-auth/issues/861
*/

export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  constructor(
    name?: string,
    email?: string,
    image?: string,
    emailVerified?: Date,
    squad?: string,
    id_alura?: string,
    id_discord?: string,
    aluraUser?: string,
    githubUser?: string,
  ) {
    super(name, email, image, emailVerified);
    this.squad = squad;
    this.id_alura = id_alura;
    this.id_discord = id_discord;
    this.aluraUser = aluraUser;
    this.githubUser = githubUser;
  }
}

type Schema = typeof Adapters.TypeORM.Models.User.schema;

export const UserSchema: Schema = {
  name: 'User',
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    squad: {
      type: 'string',
      nullable: true,
      default: null,
    },
    id_alura: {
      type: 'string',
      nullable: true,
      default: null,
      unique: true
    },
    id_discord: {
      type: 'string',
      nullable: true,
      default: null,
      unique: true
    },
    aluraUser: {
      type: 'string',
      nullable: true,
      default: null,
      unique: true
    },
    githubUser: {
      type: 'string',
      nullable: true,
      default: null,
      unique: true
    },
  },
};
