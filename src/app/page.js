// https://github.com/chartjs/Chart.js/issues/10173
// https://stackblitz.com/edit/chartjs-reproduced-error-5ayyah?file=components%2FLineChart.js
'use client'

import Grafico1 from '@/components/grafico1';
import Grafico2 from '@/components/grafico2';
import Grafico3 from '@/components/grafico3';
import Grafico4 from '@/components/grafico4';

import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10">
      <h1>Gráficos de chart.js con streaming </h1>
      <p className="mb-10">Ejemplos tomados de
        <Link href='https://nagix.github.io/chartjs-plugin-streaming/latest/samples/charts/line-horizontal.html' target='_blank'>
           chartjs-plugin-streaming
        </Link> 
      </p>
      <h2><Link href="/grafico1">Gráfico 1</Link></h2>
      <h2><Link href="/grafico2">Gráfico 2</Link></h2>
      <h2><Link href="/grafico3">Gráfico 3</Link></h2>
      <h2><Link href="/grafico4">Gráfico 4</Link></h2>
      <h2><Link href="/grafico5">Gráfico 5</Link></h2>
      <h2><Link href="/grafico6">Gráfico 6</Link></h2>
      <h2><Link href="/grafico7">Gráfico 7</Link></h2>
      <h2><Link href="/dashboard">Dashboard con todos los gráficos</Link></h2>
    </main>
  );
}