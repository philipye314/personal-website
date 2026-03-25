export default function SectionLine({ number, label, id }) {
  return (
    <div className="section-line" id={id}>
      <span className="font-label text-[11px] tracking-[0.2em] text-white uppercase">
        <span className="text-white/30 mr-2">{number} //</span> {label}
      </span>
    </div>
  )
}
