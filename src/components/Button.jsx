export default function Button({ className, children }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${className} rounded-[10px]`}
    >
      {children}
    </button>
  );
}
