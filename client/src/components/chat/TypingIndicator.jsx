function TypingIndicator() {
  return (
    <div className="flex justify-start mb-6">
      <div className="bg-[#18181B] border border-zinc-800 rounded-2xl px-5 py-4">
        <span className="animate-pulse text-zinc-400">
          Nova AI is typing...
        </span>
      </div>
    </div>
  );
}

export default TypingIndicator;