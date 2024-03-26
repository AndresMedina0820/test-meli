export const Box = ({children, customClass}: {children: React.ReactNode, customClass?: string}) => {
  return (
    <section className={`box ${customClass ?? ''}`}>
      {children}
    </section>
  )
}
