import {
  FlowList,
  SectionRail,
  SectionShell,
} from "@/components/editorial/primitives";

export function TreatmentInfoGrid({
  label = "Antes de agendar",
  title = "O que você precisa saber",
  intro,
  items,
}: {
  label?: string;
  title?: string;
  intro?: string;
  items: readonly { title: string; body: string }[];
}) {
  return (
    <SectionShell>
      <SectionRail label={label} title={title} intro={intro}>
        <FlowList items={items} />
      </SectionRail>
    </SectionShell>
  );
}
