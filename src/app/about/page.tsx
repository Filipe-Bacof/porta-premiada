import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="mx-6 flex flex-col items-center justify-center gap-3 md:mx-auto md:max-w-[730px]">
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <Image
          className="mt-12 rounded-xl md:rounded-3xl"
          src="/monty-hall.jpg"
          alt="Monty Hall programa Lets make a deal"
          width={253}
          height={200}
        />
        <h2 className="text-center text-[1.5rem] text-grass-green md:text-[1.8rem]">
          Monty Hall foi um famoso apresentador de televisão e personalidade do
          entretenimento.
        </h2>
      </div>
      <p className="text-justify text-[1.20rem]">
        Ele nasceu em 25 de agosto de 1921, em Winnipeg, Canadá, e faleceu em 30
        de setembro de 2017, em Los Angeles, Estados Unidos. Monty Hall ficou
        amplamente conhecido como o apresentador do popular jogo de televisão
        chamado &quot;Let&apos;s Make a Deal&quot; (Vamos Fazer um Acordo, em
        português), que foi ao ar pela primeira vez em 1963 e teve várias
        versões ao longo dos anos, incluindo no Brasil.
      </p>
      <p className="text-justify text-[1.20rem]">
        O formato do jogo envolvia Hall oferecendo a um participante a
        oportunidade de escolher uma porta entre três. Por trás de uma das
        portas, havia um prêmio valioso, como um carro, enquanto as outras duas
        portas escondiam prêmios menos desejáveis, como cabras. Após a escolha
        inicial do participante, Monty Hall, que tinha conhecimento sobre o que
        havia atrás de cada porta, abria uma das portas restantes que não tinha
        o prêmio valioso e perguntava ao participante se ele gostaria de mudar
        sua escolha para a outra porta que ainda estava fechada. Esse jogo gerou
        um famoso problema estatístico conhecido como &quot;Problema de Monty
        Hall&quot;, que despertou debates e controvérsias. A situação paradoxal
        ocorre porque a resposta estatisticamente correta é que o participante
        tem uma maior probabilidade de ganhar o prêmio valioso se mudar sua
        escolha após Monty Hall abrir uma das portas restantes. Esse problema
        levanta questões interessantes sobre probabilidade e intuição
        estatística.
      </p>
      <p className="text-justify text-[1.20rem]">
        O enigma ocorre porque a maioria das pessoas acredita que as chances de
        ganhar o prêmio são de 50/50, independentemente de escolher mudar ou não
        de porta. No entanto, a resposta correta é que o jogador deve trocar de
        porta, pois a probabilidade de ganhar o prêmio aumenta para 2/3 se ele
        fizer isso. Isso ocorre porque a porta escolhida inicialmente tem uma
        probabilidade de 1/3 de ter o prêmio, enquanto as outras duas portas têm
        uma probabilidade combinada de 2/3 de ter o prêmio.
      </p>
      <p className="text-justify text-[1.20rem]">
        Quando o apresentador abre uma das portas com uma cabra, ele está
        efetivamente transferindo a probabilidade restante para a outra porta
        ainda fechada, tornando-a a escolha mais provável para o prêmio.
      </p>
      <p className="text-justify text-[1.20rem]">
        Monty Hall se tornou uma figura icônica na televisão e contribuiu para
        popularizar jogos de perguntas e respostas. Sua carreira na televisão se
        estendeu por várias décadas e ele se tornou uma personalidade querida
        pelos telespectadores.
      </p>
      <Link href="/">
        <button className="mb-32 mt-8 border-none bg-btn px-[25px] py-[10px] text-[2rem] text-white hover:bg-red-800">
          Tela Principal
        </button>
      </Link>
    </div>
  )
}
