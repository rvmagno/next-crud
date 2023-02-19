import { useState } from "react";

export default function useTabelaOuForm(){

    const[visivel, setVisivel] = useState<'tabela'|'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')
    const formularioVisivel = (visivel === 'form')
    const tabelaVisivel = (visivel === 'tabela')

    return (
        formularioVisivel,
        tabelaVisivel,
        exibirTabela,
        exibirFormulario
    )
}