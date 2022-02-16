import { formatPercentage } from '../../util/formatters';
import Icons from '../Icons';

const Option = ({ data, totalVotes, isWinner }) => {
  const percentage = formatPercentage(data.votes, totalVotes);

  return (
    <div className="option position-relative">
      {isWinner && <Icons.Trophy className="position-absolute" />}
      <div className="option-content position-relative">
        <div
          className="option-fill position-absolute"
          style={{ width: percentage }}
        />
        <div className="option-text position-relative d-flex justify-content-between">
          <span className="w-75 text-truncate">{data.title}</span>
          <span>
            {percentage} ({data.votes || 0})
          </span>
        </div>
      </div>
    </div>
  );
};

export default Option;
