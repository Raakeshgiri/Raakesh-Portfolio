// Resolve conditional module classes while retaining shared global utilities.
export function bindStyles(styles) {
  return (classNames) => classNames.split(/\s+/).filter(Boolean)
    .map((name) => styles[name] || name).join(" ");
}
