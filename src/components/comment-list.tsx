import { motion } from "framer-motion";
import Link from "next/link";

type Comment = {
  _id: string;
  id?: string | null;
  username: string;
  name?: string | null;
  comment: string;
};
type CommentListProps = {
  comments: Comment[];
  isLoading: boolean;
  ownerId?: string | null;
};

const item = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
};

const container = {
  hidden: {},
  visible: {},
};

export const CommentList = ({
  comments,
  isLoading,
  ownerId,
}: CommentListProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-col space-y-1 mb-4"
    >
      {isLoading && (
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
              <div className="grid grid-cols-8 gap-4">
                <div className="h-5 bg-[#24292F] rounded col-span-1"></div>
                <div className="h-5 bg-[#24292F] rounded col-span-7"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {comments?.map((comment, index) => (
        <motion.div
          custom={index}
          variants={item}
          className={`flex gap-1 w-full text-sm break-words px-2 ${
            ownerId && ownerId === comment.id
              ? "bg-[#1f1f1f] hover:bg-[#2f2f2f] rounded"
              : ""
          }`}
          key={comment._id}
        >
          <span>
            {!!comment.id ? (
              <Link
                href={`https://github.com/${comment.username}`}
                className="text-neutral-600 dark:text-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                {comment.name}:
              </Link>
            ) : (
              <span className="text-neutral-600 dark:text-neutral-400">
                {comment.username}:
              </span>
            )}{" "}
            {comment.comment}{" "}
            {!comment._id && (
              <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
                Enviando mensagem
              </span>
            )}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};
