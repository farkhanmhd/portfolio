export default function Footer() {
  return (
    <footer className="flex w-full justify-center gap-x-5 border-t px-5 py-10 text-xs text-white md:text-base lg:px-20">
      <p>
        &copy;
        {`${new Date().getFullYear()} Farkhan Muhammad. All rights reserved.`}
      </p>
    </footer>
  );
}
