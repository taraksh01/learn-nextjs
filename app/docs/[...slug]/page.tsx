export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length == 1) {
    return <div>Viewing docs for feature {params.slug}</div>;
  } else if (params.slug?.length == 2) {
    return (
      <div>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </div>
    );
  }
  return <div>Viewing docs</div>;
}
