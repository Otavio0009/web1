type TodoStatsProps = {
    total: number;
    pendentes: number;
    concluidas: number;
    todasConcluidas: boolean;
};

type ContadorProps = {
    valor: number;
    rotulo: string;
    className?: string;
};

function Contador({ valor, rotulo, className = "" }: ContadorProps) {
    return (
        <div className="painel-item">
        <span className={`painel-numero ${className}`}>{valor}</span>
        <span className="painel-rotulo">{rotulo}</span>
        </div>
    );
}

export function TodoStats({ total, pendentes, concluidas, todasConcluidas }: TodoStatsProps) {
    return (
        <section className="painel-tarefas">
            <div className="painel-contadores">
                <Contador valor={total} rotulo="Total" />
                <Contador valor={pendentes} rotulo="Pendentes" className="painel-numero-pendente" />
                <Contador valor={concluidas} rotulo="Concluídas" className="painel-numero-concluida" />
            </div>

            {todasConcluidas && (
                <p className="painel-mensagem">Todas as tarefas foram concluídas!</p>
            )}
        </section>
    );
}