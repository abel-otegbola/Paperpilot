import Link from "next/link";


export function EmailTemplate({ data }) {

  return (
    <html lang="en" style={{ fontSize: "16px" }}>
          <h1 style={{ padding: 5, fontWeight: "700", fontSize: "25px"  }}>Research Papers Digest</h1>
          <p style={{ padding: 5, fontWeight: "700"  }}>Recent research papers you might find valuable based on your interest</p>

          <div style={{ marginBlock: 40, paddingBlock: 20 }}>
          {
            data.map((paper, i) => (
                <div key={i} >
                    <div style={{ padding: 7 }}>
                        <Link href={{
                            pathname: 'https://paperpilothub.vercel.app/dashboard/singlePaper',
                            query: { paper: paper.paperId, source: "semantic" }
                        }} style={{ fontSize: "20px" }}>{paper.title}</Link>
                        <p style={{ paddingBlock: 1 }}>Authors: {paper.authors.slice(0,3).map((author, i) => ( <span key={i}>{author.name},</span> ))}</p>
                        <p className="opacity-[0.6]">Year: {paper.year}</p>
                    </div>
                </div>
            ))
          }
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBlock: 20 }}>Not getting the best research recommendations? <a href="https://paperpilothub.vercel.app/dashboard/recommendations" style={{ color: "#6252f2" }}>Edit your Recommendations here</a></div>
          
          <div style={{ width: "100%", textAlign: "center", marginTop: 20 }}>If you have any questions, feedback, ideas or problems don't hesitate to contact us! paperpilothub@outlook.com</div>
          <div style={{ width: "100%", textAlign: "center" }}>Paperpilot @Copyright {new Date().getFullYear()} || Designed and created by <a href="https://abelo.tech" style={{ color: "#6252f2" }}>Abelo</a></div>
    </html>
  );
}
