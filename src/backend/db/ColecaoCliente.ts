import firebase from "../config";
import Cliente from "@/core/Cliente";
import ClienteRepository from "@/core/ClienteRepository";
import { runInThisContext } from "vm";

export default class ColecaoCliente implements ClienteRepository{
    

    #conversor={
        toFirestore(cliente: Cliente){
            return{
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFireStore(snapshot: firebase.firestore.QueryDocumentSnapshot, 
            options: firebase.firestore.SnapshotOptions): Cliente{
                const dados = snapshot.data(options)
                return new Cliente(dados.nome, dados.idade, snapshot.id)

            }
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        console.log(`colecao ${cliente}`)
        if(cliente?.id){
            await this.#colecao().doc(cliente.id).set(cliente)
            return cliente
        }
        else{
            const docRef = await this.#colecao().add(cliente)
            const doc = await docRef.get()
            return doc.data
        }
    }
    
    async excluir(cliente: Cliente): Promise<void> {
        return this.#colecao().doc(cliente.id).delete()
    }
    
    async obterTodos(): Promise<Cliente> {
        const query = await this.#colecao.get()

        return query.doc.maps(doc => doc.data()) ?? []
    }

    #colecao(){
        return firebase
            .firestore().collection('clientes')
            .withConverter(this.#conversor)
    }


}