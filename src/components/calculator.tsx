"use client"; // Indica que este componente é um componente cliente no Next.js

import { useState } from "react"; // Importa o hook useState para gerenciar o estado da calculadora
import Head from "next/head"; // Importa Head para adicionar metadados na página

export default function Calculator() {
  // Estado para armazenar a entrada do usuário
  const [input, setInput] = useState("");

  // Função para adicionar caracteres ao input conforme os botões são pressionados
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  // Função para calcular o resultado da expressão matemática
  const calculate = () => {
    try {
      setInput(eval(input).toString()); // Utiliza eval para calcular a expressão (não recomendado para produção por segurança)
    } catch {
      setInput("Erro"); // Se ocorrer erro na execução, exibe 'Erro'
    }
  };

  // Função para limpar o input
  const clear = () => setInput("");

  return (
    <>
      {/* Container principal da página */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
        {/* Corpo da calculadora */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-72">
          {/* Tela de exibição dos números */}
          <div className="mb-4 p-2 text-right bg-gray-700 rounded text-xl min-h-[50px]">
            {input || "0"} {/* Mostra o input ou '0' caso esteja vazio */}
          </div>

          {/* Grid com os botões da calculadora */}
          <div className="grid grid-cols-4 gap-2">
            {/* Mapeia os botões numéricos e operadores */}
            {[
              "7",
              "8",
              "9",
              "/",
              "4",
              "5",
              "6",
              "*",
              "1",
              "2",
              "3",
              "-",
              "0",
              ".",
              "=",
              "+",
            ].map((char) => (
              <button
                key={char}
                className="bg-gray-600 p-4 rounded hover:bg-gray-500"
                onClick={() => (char === "=" ? calculate() : handleClick(char))} // Se for '=', executa o cálculo; caso contrário, adiciona ao input
              >
                {char} {/* Exibe o caractere correspondente no botão */}
              </button>
            ))}

            {/* Botão de limpar (C) ocupando duas colunas */}
            <button
              className="col-span-2 bg-red-500 p-4 rounded hover:bg-red-400"
              onClick={clear}
            >
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
