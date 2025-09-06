import { Route, Routes } from 'react-router-dom';

import PersonalAccount from 'components/PersonalAccount';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalAccount />} />
    </Routes>
  );
};

export default Root;
