"use client"
import ColecaoCliente from '@/backend/db/ColecaoCliente'
import Botao from '@/componets/Botao'
import Formulario from '@/componets/Formulario'
import Layout from '@/componets/Layout'
import Tabela from '@/componets/Tabela'
import Cliente from '@/core/Cliente'
import ClienteRepository from '@/core/ClienteRepository'
import useCliente from '@/hooks/useCliente'
import { useEffect, useState } from 'react'

export default function Home() {

const {
  cliente, 
  clientes,
  novoCliente,
  salvarCliente,
  selecionarCliente, 
  excluirCliente,
  tabelaVisivel ,
  exibirTabela
} = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
      <Layout titulo="Cadastro Simples" >
        { tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao cor="green" className="mb-4"
              onClick={novoCliente} >Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>

        ) : (
          <>
            <Formulario 
              cliente={cliente} 
              cancelado={()=> exibirTabela}
              clienteMudou={salvarCliente}
            > </Formulario>
          </>
        )}
          
          

      </Layout>
      
    </div>
  )
}
