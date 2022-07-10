interface Props {
  onSetOrderByChange: (order: string) => void;
  orderBy: string;
  quantity: number;
}

const JobListHeader = (props: Props): JSX.Element => {
  return (
    <div className="JobListHeader">
      <p className="order">
        {'Order by: '}
        <button
          className={props.orderBy === 'title' ? 'active' : ''}
          onClick={() => props.onSetOrderByChange('title')}
        >
          title
        </button>
        {' - '}
        <button
          className={props.orderBy === 'date' ? 'active' : ''}
          onClick={() => props.onSetOrderByChange('date')}
        >
          date
        </button>
      </p>
    </div>
  );
};

export default JobListHeader;
