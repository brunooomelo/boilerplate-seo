import { event } from "@/utils/gtag";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import { useMutation, useQueryClient } from "react-query";

type FormValues = {
  comment: string;
};
type CommentFormProps = {
  session: Session;
};
export const CommentForm = ({ session }: CommentFormProps) => {
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    formState: { isLoading },
    reset,
  } = useForm<FormValues>();

  const mutation = useMutation(
    (newComment: FormValues) =>
      fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      }),
    {
      onMutate: async (newComment) => {
        await queryClient.cancelQueries("comments");
        const previousTodos = queryClient.getQueryData("comments");

        queryClient.setQueryData("comments", (old: any) => [
          newComment,
          ...old,
        ]);

        return { previousTodos };
      },
      onError: (_, __, context) => {
        queryClient.setQueryData("comments", context?.previousTodos);
      },
      onSettled: () => {
        queryClient.invalidateQueries("comments");
      },
    }
  );

  const onSubmit = async (data: FormValues) => {
    if (!session.user) {
      alert("voce nao esta authenticado");
      return;
    }

    const newComment = {
      id: session.user.id,
      name: session.user.name,
      username: session.user.username,
      comment: data.comment,
    };

    try {
      await mutation.mutate(newComment);
      reset({ comment: "" });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-1 items-start">
      <form
        className="flex w-full gap-2 items-start"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="comment"
          render={({ field: { onChange, name, value, onBlur, ref } }) => (
            <input
              ref={ref}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              className="px-4 py-1.5  block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none"
              placeholder="Deixe sua mensagem aqui"
            />
          )}
        />
        <button
          type="submit"
          className="flex w-1/4 items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="text-sm font-semibold leading-6">Carregando</span>
          ) : (
            <>
              <span className="text-sm font-semibold leading-6">Enviar</span>
              <FiSend className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
      <button
        onClick={() => {
          event({
            action: "sign-out-github",
            category: "login",
            label: "sign out on guestbook page",
            value: 1,
          });
          signOut();
        }}
        className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6"
        disabled={isLoading}
      >
        Sair do guestbook
      </button>
    </div>
  );
};
