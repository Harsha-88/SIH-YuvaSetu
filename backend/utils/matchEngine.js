function calculateScore(student, intern) {
  let score = 0;
  const explanation = [];

  if (Array.isArray(student.skills) && Array.isArray(intern.skills)) {
    const matched = student.skills.filter(s => intern.skills.map(x => x.toLowerCase()).includes(s.toLowerCase()));
    const skillPoints = matched.length * 6;
    score += skillPoints;
    if (matched.length) explanation.push(`Skills matched: ${matched.join(", ")} (+${skillPoints})`);
  }

  if (student.location && intern.location && student.location.toLowerCase() === intern.location.toLowerCase()) {
    score += 4;
    explanation.push("Location match (+4)");
  }

  if (student.firstTimer) {
    score += 3;
    explanation.push("First-timer bonus (+3)");
  }

  if (student.category && student.category !== "General") {
    score += 2;
    explanation.push(`Diversity boost (${student.category}) (+2)`);
  }

  if (intern.capacity && intern.allocated >= intern.capacity) {
    score -= 10;
    explanation.push("Internship full (-10)");
  } else if (intern.capacity && intern.allocated >= 0) {
    const avail = intern.capacity - (intern.allocated || 0);
    if (avail >= 3) {
      score += 1;
      explanation.push("High availability (+1)");
    }
  }

  return { score, explanation };
}

export function matchStudentToInternships(student, internships, topN = 5) {
  if (!student || !internships) return [];
  const results = internships.map(intern => {
    const { score, explanation } = calculateScore(student, intern);
    return { ...intern, score, explanation };
  });
  results.sort((a, b) => b.score - a.score);
  return results.slice(0, topN);
}