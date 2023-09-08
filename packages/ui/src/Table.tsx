type TableHeader = {
  label: string;
  key: string;
  sortable: boolean;
};

type TableData = {
  [key: string]:
    | TableStringData
    | TableLinkData
    | TableBadgeData
    | TableSelectData
    | TableCheckboxData
    | TableRadioData;
};

type TableStringData = {
  type: 'string';
  value: TableDataValue;
};

type TableLinkData = {
  type: 'link';
  value: TableDataValue;
  uri: string;
};

type TableBadgeData = {
  type: 'badge';
  value: TableDataValue;
  variant: Variant;
};

type TableSelectData = {
  type: 'select';
  value: TableDataValue;
  options: Option[];
};

type TableCheckboxData = {
  type: 'checkbox';
  value: TableDataValue;
  options: Option[];
};

type TableRadioData = {
  type: 'radio';
  value: TableDataValue;
  options: Option[];
};

type Option = {
  key: string;
  label: string;
};

type TableDataValue = string | number | boolean;

type Variant =
  | 'success'
  | 'successLight'
  | 'warning'
  | 'warningLight'
  | 'danger'
  | 'dangerLight'
  | 'primary'
  | 'primaryLight';

const Table = () => {
  const tableHeaders: TableHeader[] = [
    {
      label: 'label1',
      key: 'key1',
      sortable: true,
    },
    {
      label: 'label2',
      key: 'key2',
      sortable: true,
    },
  ];

  const tableData: TableData[] = [
    {
      label1: {
        type: 'string',
        value: 'string',
      },
      label2: {
        type: 'string',
        value: 'string',
      },
    },
    {
      label1: {
        type: 'badge',
        value: 'badge',
        variant: 'success',
      },
      label2: {
        type: 'link',
        value: 'link',
        uri: 'www.naver.com',
      },
    },
  ];

  return (
    <div>
      <table>
        {/* 테이블 제목 */}
        <caption></caption>
        {/* 테이블 설명 */}
        <summary></summary>
        <thead>
          <tr>
            {tableHeaders.map(({ key, label, sortable }) => (
              <th key={key} id="field1" scope="col">
                {label}
                {sortable && <span>화살표</span>}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((tableData, i) => (
            <tr key={i}>
              {tableHeaders.map(({ key }, idx) => (
                <td key={idx} headers={key}>
                  {tableData[key].type === 'string' ? (
                    <span>tableData[key].value</span>
                  ) : tableData[key].type === 'link' ? (
                    ''
                  ) : tableData[key].type === 'badge' ? (
                    ''
                  ) : (
                    ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
