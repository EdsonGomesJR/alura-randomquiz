import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const { query } = useRouter();
  const { name } = query;

  return (

    <div>
      <h1>

        {name}
      </h1>

    </div>
  );
}
