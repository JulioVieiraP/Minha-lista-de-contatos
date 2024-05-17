class Contato {
  Name: string
  descricao?: string
  telefone: string
  Gmail: string
  icon?: string
  constructor(Name: string, descricao: string, telefone: string, Gmail: string, icon: string) {
    this.Name = Name
    this.descricao = descricao
    this.telefone = telefone
    this.Gmail = Gmail
    this.icon = icon
  }
}

export default Contato
