export function Title(props: any) {

    console.log(props);
    return (
        <div className='flex flex-col p-4'>
            <h1 className='text-lg font-bold'>{props.main ?? "Titulo padrão"}</h1>
            <h2 className='text-sm text-gray-500'>{props.subtitle}</h2>
        </div>
    );
}