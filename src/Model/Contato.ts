class Contato {
  Name?: string;
  descricao?: string;
  telefone: string;
  Gmail: string;
  Chat?: string;

  constructor(Name: string, descricao: string, telefone: string, Gmail: string, Chat: string) {
    this.Name = Name;
    this.descricao = descricao;
    this.telefone = telefone;
    this.Gmail = Gmail;
    this.Chat = Chat;
  }
}

export default Contato;
