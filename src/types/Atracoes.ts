export interface IAtracao {
    id: number
    nome: string
    descricao: string | null
    endereco: string | null
    horarioFuncionamento: string | null
    telContato: string | null
    websiteUrl: string | null
    email: string | null
    avaliacao: string | null
    precoIngresso: string | null
    imagens: string[]
    tiposAtracoes?: {
        id: number
        nome: string
    }
}