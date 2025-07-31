export const clsx = (...args: (string | boolean | undefined | null)[]) => {
  const classNames = args.filter(Boolean);

  return classNames.length ? classNames.join(' ') : undefined;
};
