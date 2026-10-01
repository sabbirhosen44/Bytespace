"use client";

import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { Reveal } from "@/components/ui/Reveal";
import type { AuthField } from "@/types";

type AuthFormProps = { fields: AuthField[]; submitLabel: string };

const BASE_DELAY = 350;
const STEP = 80;

export function AuthForm({ fields, submitLabel }: AuthFormProps) {
  return (
    <form
      className="mt-10 flex flex-col gap-6 lg:mt-[42px]"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: auth backend ready hole ekhane new FormData(event.currentTarget) pathan
      }}
    >
      {fields.map((field, index) => (
        <Reveal key={field.name} delay={BASE_DELAY + index * STEP}>
          <FormField
            required
            className={
              field.type === "password"
                ? "placeholder:text-body-xs placeholder:tracking-wider"
                : undefined
            }
            {...field}
          />
        </Reveal>
      ))}

      <Reveal delay={BASE_DELAY + fields.length * STEP} className="flex justify-end">
        <Button type="submit">{submitLabel}</Button>
      </Reveal>
    </form>
  );
}