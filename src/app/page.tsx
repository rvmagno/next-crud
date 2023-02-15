import Layout from '@/componets/Layout'
import Tabela from '@/componets/Tabela'
import Cliente from '@/core/Cliente'

export default function Home() {

  const clientes = [
    new Cliente('Maria', 30, '1'),
    new Cliente('Jose', 32, '1'),
    new Cliente('Isabel', 30, '1'),
    new Cliente('Zacarias', 33, '1')
        
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir ${cliente.nome}`)
  }


  return (
    <div className={`
      flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
    `}>
      <Layout titulo="Cadastro Simples" >
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido} />
      </Layout>
      
    </div>
  )
}
