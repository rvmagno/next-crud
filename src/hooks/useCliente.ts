import ColecaoCliente from "@/backend/db/ColecaoCliente"
import Cliente from "@/core/Cliente"
import ClienteRepository from "@/core/ClienteRepository"
import { useEffect, useState } from "react"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useCliente(){

  const repo: ClienteRepository = new ColecaoCliente()

  const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos, [])

  function obterTodos(){
    // repo.obterTodos().then(setClientes)
    repo.obterTodos().then(clientes =>{
      setClientes(clientes)
      exibirTabela()
    })
  }

  // const clientes = [
  //   new Cliente('Maria', 30, '1'),
  //   new Cliente('Jose', 32, '2'),
  //   new Cliente('Isabel', 30, '3'),
  //   new Cliente('Zacarias', 33, '4')
        
  // ]

  function selecionarCliente(cliente: Cliente){
    console.log( `Selecionado ${cliente.nome}` )
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente){
    await repo.excluir(cliente)
    console.log(`Excluido ${cliente.nome}`)
  }

  async function salvarCliente(cliente: Cliente){
    console.log(cliente)
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    exibirFormulario()

  }

  return{

    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela

  }

}