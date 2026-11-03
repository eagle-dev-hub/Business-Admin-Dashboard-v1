type SummaryCardProps = {
title: string,
value: number,
description: string


}
function SummaryCard(props: SummaryCardProps){
return(
<div className="bg-white border rounded-xl p-5 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow">
<h2 className="font-bold text-lg">{props.title}</h2>
<p className="text-3xl font-bold text-gray-900" >{props.value}</p>
<p className="text-sm text-gray-500">{props.description}</p>
</div>

)


}
export default SummaryCard;