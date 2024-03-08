import React from 'react'
import './CSS/std_home.css'
import male_student from '../../Assets/male_student.jpg';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

const Home = () => {
  const more_student_data = [{
    "dob": "12-02-2024",
    "distance": 7,
    "address": "B/204,Shanti-Nivas,Ghuma gam,Ahmedabad,386666",
    "caste": "Open",
    "mobileno": 1212121212,
    "aadharno": 454545454545,
    "email": "chaggan@gmail.com",
    "skills": "Football,Basket ball",
  }
  ];
  const school_data = [{
    "sch_name": "Divine",
    "Fees": "50,000",
    "category": "Private",
    "index": 1,
  }
  ];

  const family_data = [{
    "income": "35,000",
    "mother_occ": "House-wife",
    "father_occ": "Farmer",
  }
  ];

  const student_col = [
    {
      header: 'Birth-Date',
      accessorKey: 'dob',
    },
    {
      header: 'Distance',
      accessorKey: 'distance',
    },
    {
      header: 'Address',
      accessorKey: 'address',
    },
    {
      header: 'Caste',
      accessorKey: 'caste',
    },

    {
      header: 'Mobile No.',
      accessorKey: 'mobileno',
    },
    {
      header: 'Aadhar No.',
      accessorKey: 'aadharno',
    },
    {
      header: 'E-mail',
      accessorKey: 'email',
    },
    {
      header: 'Skills',
      accessorKey: 'skills',
    },
  ]

  const school_col = [
    {
      header: 'Index',
      accessorKey: 'index',
    },
    {
      header: 'School-name',
      accessorKey: 'sch_name',
    },
    {
      header: 'School-Fees',
      accessorKey: 'Fees',
    },
    {
      header: 'Category',
      accessorKey: 'category',
    }
  ]
  const family_col = [
    {
      header: 'Income',
      accessorKey: 'income',
    },
    {
      header: 'Mother Occupation',
      accessorKey: 'mother_occ',
    },
    {
      header: 'Father Occupation',
      accessorKey: 'father_occ',
    }

  ]

  const more_info_table = useReactTable({ data: more_student_data, columns: student_col, getCoreRowModel: getCoreRowModel() })
  const school_info_table = useReactTable({ data: school_data, columns: school_col, getCoreRowModel: getCoreRowModel() })
  const family_info_table = useReactTable({ data: family_data, columns: family_col, getCoreRowModel: getCoreRowModel() })
  return (
    <>
      <div className='home_grid_container'>
        <div className='basic'>
          <div className='home_img_name'>
            <img src={male_student} alt="" />
            <p>Chaggan Chaurasia</p>
          </div>
          <div className='basic_info'>
            <p>Age : 18</p>
            <p>Std : 12</p>
            <p>Roll No. : 23</p>
            <p>Gender : Male</p>
          </div>
        </div>
        <div className='more_info'>
          <h3>More Details</h3>
          <table className='more-info-table'>
            <thead>
              {more_info_table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {more_info_table.getRowModel().rows.map(row => (
                <tr key={row.original.aadharno}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.column.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='sch_flex'>
          <div className='school_info'>
            <h3>School Details</h3>
            <table className='school-info-table'>
              <thead>
                {school_info_table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {school_info_table.getRowModel().rows.map(row => (
                  <tr key={row.original.index}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.column.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='family_info'>
            <h3>Family Details</h3>
            <table className='family-info-table'>
              <thead>
                {family_info_table.getHeaderGroups().map(headerGroup => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                      <th key={header.id}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {family_info_table.getRowModel().rows.map(row => (
                  <tr key={row.original.income}>
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.column.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home
