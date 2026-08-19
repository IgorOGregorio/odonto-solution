import {
  SectionRail,
  SectionShell,
  StepFlowList,
} from "@/components/editorial/primitives";

export function TreatmentSteps({
  title,
  intro,
  steps,
  label = "Processo",
}: {
  title: string;
  intro: string;
  steps: readonly { title: string; description: string }[];
  label?: string;
}) {
  return (
    <SectionShell bordered className="bg-muted/20">
      <SectionRail label={label} title={title} intro={intro}>
        <StepFlowList steps={steps} />
      </SectionRail>
    </SectionShell>
  );
}
