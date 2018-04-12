export const EndorsementTemp = [
  {
    title: 'Basic Information',
    alias: 'Basic Info',
    name: 'basic-info',
    valid: true,
    content: [
      {
        title: 'Primary Named Insured',
        name: 'Primary Named Insured',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'primaryName',
            description: '',
            width: '100',
            placeholder: 'Name',
            value: 'Apple Industries'
          }
        ]
      },
      {
        title: 'Mailing Address at ',
        name: 'Address',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'address',
            description: '',
            width: '100',
            placeholder: 'Address',
            value: '134 W 26th St. Suite 1100 New York, NY 10010'
          }
        ]
      },
      {
        title: 'Preferred Contact at ',
        name: 'Contact Person',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'contactName',
            description: '',
            width: '100',
            placeholder: 'Contact Name',
            value: 'Jane Doe'
          },
          {
            type: 'text',
            name: 'contactTitle',
            description: '',
            width: '50',
            placeholder: 'Contact Title',
            value: 'Managing Director'
          },
          {
            type: 'text',
            name: 'contactPhone',
            description: '',
            width: '50',
            placeholder: 'Contact Phone Number',
            value: '8455555555'
          }
        ]
      },
      {
        title: 'Additional Named Insured',
        name: 'Additional Named Insured',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'namedInsured',
            description: '',
            width: '100',
            placeholder: 'Named Insured',
            value: [
              'Prestige Worldwide, LLC',
              'Big Apple Management, LLC'
            ]
          },
          {
            type: 'button',
            name: 'submitBtn',
            width: '100',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Description of Operations',
        name: 'Description of Operations',
        valid: true,
        content: [
          {
            type: 'textarea',
            name: 'operationDesc',
            description: '',
            width: '100',
            placeholder: 'Type here...',
            value: 'Builds amazing things and provides supreme service to their clients. The fastest growing retailer in their market and growing more and more everyday.'
          }
        ]
      },
      {
        title: 'Company Website URL',
        name: 'Website',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'website',
            description: '',
            width: '100',
            placeholder: 'Website URL',
            value: 'appleindustries.com'
          }
        ]
      },
      {
        title: 'Limits Requested',
        name: 'Limits Requested',
        valid: true,
        content: [
          {
            type: 'checkbox-group',
            name: 'limits',
            description: '',
            width: '100',
            elements: [
              {
                key: '10m',
                title: '$10M',
                value: false
              },
              {
                key: '25m',
                title: '$25M',
                value: true
              },
              {
                key: '50m',
                title: '$50M',
                value: false
              },
              {
                key: '75m',
                title: '$75M',
                value: false
              },
              {
                key: '100m',
                title: '$100M',
                value: false
              }
            ]
          }
        ]
      },
      {
        title: 'Effective Date',
        name: 'Effective Date',
        valid: true,
        content: [
          {
            type: 'datepicker',
            name: 'effectiveDate',
            description: '',
            width: '50',
            placeholder: 'Select Date',
            value: '12/30/2017'
          }
        ]
      }
    ]
  },
  {
    title: 'Policy Details',
    alias: 'Policy Details',
    name: 'policy-details',
    valid: true,
    content: [
      {
        title: 'Underlying General Liability',
        name: 'Underlying General Liability',
        valid: true,
        description: 'Required minimum limits include: $2,000,000 General Aggregate, $1,000,000. Per Occurrence, $1,000,000 Personal & Advert and $1,000,000 Per Occurrence.',
        values: [
          {
            'perLocationAggregate': false,
            'hostLiquorIncluded': false,
            'limitsProvided': '1,000,000.00',
            'namedInsured': 'General Liability',
            'carrier': 'Berkley Regional',
            'annualPremium': '780000',
            'startDate': '08/21/2017',
            'endDate': '08/21/2018'
          }
        ],
        content: [
          {
            type: 'radio-group',
            name: 'perLocationAggregate',
            description: 'Per Location Aggregate?',
            width: '50',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'hostLiquorIncluded',
            description: 'Host Liquor Included?',
            width: '50',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'text',
            name: 'limitsProvided',
            description: '',
            width: '100',
            placeholder: 'Limits Provided',
            inputtype: 'number',
            value: ''
          },
          {
            type: 'text',
            name: 'namedInsured',
            description: '',
            width: '50',
            placeholder: 'Named Insured',
            value: ''
          },
          {
            type: 'text',
            name: 'carrier',
            description: '',
            width: '50',
            placeholder: 'Carrier',
            value: ''
          },
          {
            type: 'text',
            name: 'annualPremium',
            description: '',
            width: '33.33',
            placeholder: 'Annual Premium',
            inputtype: 'number',
            value: ''
          },
          {
            type: 'datepicker',
            name: 'startDate',
            description: '',
            width: '33.33',
            placeholder: 'Start Date',
            value: null
          },
          {
            type: 'datepicker',
            name: 'endDate',
            description: '',
            width: '33.33',
            placeholder: 'End Date',
            value: null
          },
          {
            type: 'button',
            name: 'submitBtn',
            width: '100',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Other Underlying Coverages',
        name: 'Other Underlying Coverages',
        valid: true,
        values: [
          {
            'coverageType': 'Auto Liability',
            'coverageName': 'Auto Liability',
            'limitsProvided': '1,000,000.00',
            'namedInsured': 'General Liability',
            'carrier': 'Berkley Regional',
            'annualPremium': '780000',
            'startDate': '08/21/2017',
            'endDate': '08/21/2018'
          }
        ],
        content: [
          {
            type: 'dropdown',
            description: 'Add a coverage type to provide details about the underlying coverage you currently have.',
            name: 'addCoverageTypeDropdown',
            title: 'ADD COVERAGE TYPE',
            width: '100',
            subtitles: [
              'Employee Benefits Liability',
              'Auto Liability',
              'Employers Liability',
              'Liquor Liability',
              'HNO Liability',
              'Foreign Liability(Incidental, Auto & WC)',
              'Other Liability'
            ]
          }
        ]
      },
      {
        title: 'Expiring Umbrella',
        name: 'Expiring Umbrella',
        valid: true,
        values: [
          {
            'carrier': 'Berkley Regional',
            'limitsProvided': '10000000',
            'annualPremium': '780000'
          }
        ],
        content: [
          {
            type: 'text',
            name: 'carrier',
            description: '',
            width: '30',
            placeholder: 'Carrier',
            value: ''
          },
          {
            type: 'text',
            name: 'limitsProvided',
            inputtype: 'number',
            description: '',
            width: '34',
            placeholder: 'Limits Provided',
            value: ''
          },
          {
            type: 'text',
            name: 'annualPremium',
            inputtype: 'number',
            description: '',
            width: '36',
            placeholder: 'Annual Premium',
            value: ''
          },
          {
            type: 'button',
            width: '100',
            name: 'submitBtn',
            position: 'right',
            title: 'ADD'
          }
        ]
      },
      {
        title: 'Total Ratable Exposures',
        name: 'Total Ratable Exposures',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'grossReceipts',
            inputtype: 'number',
            description: '',
            width: '100',
            placeholder: 'Gross Receipts',
            value: '424037496'
          },
          {
            type: 'radio-group',
            name: 'lessorsRiskExposures',
            description: 'Lessors Risk Exposures?',
            width: '100',
            value: true,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ],
            content: [
              {
                type: 'text',
                name: 'occupant',
                description: '',
                width: '66.66',
                placeholder: 'Occupant',
                value: 'Occupant 1'
              },
              {
                type: 'text',
                name: 'sqft',
                inputtype: 'number',
                description: '',
                width: '33.33',
                placeholder: 'Sq. Ft.',
                value: '3400'
              },
              {
                type: 'button',
                width: '100',
                name: 'submitBtn',
                position: 'right',
                title: 'ADD'
              }
            ],
            exposures: [
              {
                'grossReceipts': '424,037,496',
                'occupant': 'Occupant 1',
                'sqft': '3,400',
                'lessorsRiskExposures': 'true'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'autoExposure',
            description: 'Auto Exposure?',
            width: '100',
            value: true,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ],
            content: [
              {
                type: 'text',
                name: 'privatePassenger',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Private Passenger',
                value: '1'
              },
              {
                type: 'text',
                name: 'light',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Light',
                value: '0'
              },
              {
                type: 'text',
                name: 'medium',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Medium',
                value: '0'
              },
              {
                type: 'text',
                name: 'heavyOrExtraHeavy',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Heavy/Extra Heavy',
                value: '2'
              },
              {
                type: 'text',
                name: 'trailers',
                inputtype: 'number',
                description: '',
                width: '50',
                placeholder: 'Trailers',
                value: '1'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Locations',
    alias: 'Locations',
    name: 'locations',
    valid: true,
    content: [
      {
        title: 'Number of Locations',
        name: 'Number of Locations',
        valid: true,
        content: [
          {
            type: 'text',
            name: 'number',
            description: '',
            width: '50',
            placeholder: 'Enter Number',
            inputtype: 'number',
            value: '3'
          }
        ]
      },
      {
        title: 'Provide Schedule of Locations',
        name: 'Schedule of Locations',
        valid: true,
        values: [
          {
            'address': '134 W 26th Street New York NY, 10001',
            'address2': '1B',
            'locationNotes': 'This location has a description that fits into this square. It’s not a very good description, but it tells you a little bit about the location.'
          },
          {
            'address': '134 W 26th Street New York NY, 10001',
            'address2': '1B',
            'locationNotes': 'This location has a description that fits into this square. It’s not a very good description, but it tells you a little bit about the location.'
          },
          {
            'address': '134 W 26th Street New York NY, 10001',
            'address2': '1B',
            'locationNotes': 'This location has a description that fits into this square. It’s not a very good description, but it tells you a little bit about the location.'
          }
        ],
        content: [
          {
            type: 'text',
            name: 'address',
            description: '',
            width: '100',
            placeholder: 'Address',
            value: ''
          },
          {
            type: 'text',
            name: 'address2',
            description: '',
            width: '100',
            placeholder: 'Suite, Floor, Etc.',
            value: ''
          },
          {
            type: 'textarea',
            name: 'locationNotes',
            description: 'You can include notes for each location to add additional information like suite or floor number, gross sales per location, square footage per location, etc.',
            width: '100',
            placeholder: 'Location Notes',
            value: ''
          },
          {
            type: 'button',
            width: '100',
            name: 'submitBtn',
            position: 'right',
            title: 'ADD'
          },
          {
            type: 'uploader',
            name: 'addressUploader',
            description: 'If you have a lengthy list to address, please upload for convenience.',
            width: '100',
            placeholder: 'Drag and drop anywhere on the screen. Your attachments will appear in the attachments section below.',
            value: ''
          }
        ]
      }
    ]
  },
  {
    title: 'Operations',
    alias: 'Operations',
    name: 'operations',
    valid: true,
    content: [
      {
        title: 'Retail Operations',
        name: 'Retail Operations',
        valid: true,
        content: [
          {
            type: 'checkbox-group',
            name: 'operationType',
            description: 'Select an operation type:',
            width: '100',
            value: true,
            elements: [
              {
                key: 'retailApparel',
                title: 'Retail Apparel',
                value: true
              },
              {
                key: 'retailJewelry',
                title: 'Retail Jewelry',
                value: false
              },
              {
                key: 'retailFurniture',
                title: 'Retail Furniture',
                value: false
              },
              {
                key: 'retailHomeGoods',
                title: 'Retail Home Goods',
                value: false
              },
              {
                key: 'retailSportingGoods',
                title: 'Retail Sporting Goods',
                value: false
              },
              {
                key: 'retailShoes',
                title: 'Retail Shoes',
                value: false
              },
              {
                key: 'groceryStore',
                title: 'Grocery Store',
                value: true,
                children: [
                  {
                    type: 'checkbox-group',
                    name: 'groceryStore',
                    description: '',
                    width: '80',
                    value: true,
                    elements: [
                      {
                        key: 'gasExposure',
                        title: 'Gas Exposure',
                        value: true,
                        children: [
                          {
                            type: 'text',
                            name: 'gasReceipts',
                            description: '',
                            width: '100',
                            placeholder: 'Gas Receipts',
                            inputtype: 'number',
                            value: '25648978'
                          }
                        ]
                      },
                      {
                        key: 'pharmacyExposure',
                        title: 'Pharmacy Exposure',
                        value: true,
                        children: [
                          {
                            type: 'text',
                            name: 'numberOfPharmacists',
                            description: '',
                            width: '100',
                            placeholder: 'Number of Pharmacists',
                            inputtype: 'number',
                            value: '16'
                          },
                          {
                            type: 'text',
                            name: 'numberOfPrescriptions',
                            description: '',
                            width: '100',
                            placeholder: 'Number of Prescriptions',
                            inputtype: 'number',
                            value: '64'
                          },
                          {
                            type: 'text',
                            name: 'limitOfLiability',
                            description: '',
                            width: '100',
                            placeholder: 'Limit of Liability',
                            inputtype: 'number',
                            value: '15623000'
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                key: 'other',
                title: 'Other',
                value: true,
                children: [
                  {
                    type: 'textarea',
                    name: 'note',
                    description: '',
                    width: '100',
                    placeholder: 'Please Describe',
                    value: 'This is my description and I made it up so it would fit into this really small text box. If it were longer, I might need to construct a much larger text box.'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        title: 'Applicant Operations',
        name: 'Applicant Operations',
        valid: true,
        content: [
          {
            type: 'radio-group',
            name: 'haveOperations',
            description: 'Does the Applicant have operations in addition to the Retail Exposure?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'storeProvide',
            description: 'Does the store provide installation or service of their products?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'regularDemonstration',
            description: 'Does store regularly provide demonstrations?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'offsiteEvents',
            description: 'Does the applicant conduct or sponsor any off-site events?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'checkbox-group',
            name: 'storeLocation',
            description: 'Store(s) are located in:',
            width: '100',
            value: {},
            elements: [
              {
                key: 'shoppingMail',
                title: 'Inside shopping mall',
                value: false
              },
              {
                key: 'stripCenter',
                title: 'Strip center',
                value: false
              },
              {
                key: 'standloneStore',
                title: 'As a stand alone store',
                value: true
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'insureProducts',
            description: 'Does the Applicant have operations in addition to the Retail Exposure?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Safety',
    alias: 'Safety',
    name: 'safety',
    valid: true,
    content: [
      {
        title: 'Safety Information',
        name: 'Safety Information',
        valid: true,
        content: [
          {
            type: 'radio-group',
            name: 'safetyRequirements',
            description: 'Do all stores comply with NFPA101 fire safety requirements?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'escalators',
            description: 'Do stores with escalators professionally maintain them at least quarterly?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'evidenceMaintenance',
            description: 'In the United States, new escalators must abide by ASME A17.1 standards, and old/historic escalators must conform to the safety guidelines of ASME A17.3. Is evidence of maintenance on file?',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'holdHarmless',
            description: 'Confirm that any contractor that works onsite must evidence at least $1mm liability limits and must sign a hold harmless in favor or insured.',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'annualMVRs',
            description: 'All drivers (including drivers using their personal vehicles for any company business) must have annual MVR\'s reviewed and no drivers under 21 or over 75; drivers must have less than 3 moving violations annually and no DUI\'s on record.',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'text',
            name: 'numberOfDrivers',
            description: 'Advise number of drivers that use their own autos for company business.',
            width: '100',
            placeholder: 'Enter Number',
            inputtype: 'number',
            value: '21'
          },
          {
            type: 'radio-group',
            name: 'certificate',
            description: 'All product suppliers must evidence a certificate of insurance from an insurer with a US presence demonstrating products liability of at least $5mm. Confirm Certificates obtained.',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          },
          {
            type: 'radio-group',
            name: 'safetyProgram',
            description: 'All stores must have a written safety program which includes regular floor sweeps multiple times daily, security procedures including dressing room controls, crowd control procedures to name a few. Please confirm.',
            width: '100',
            value: false,
            elements: [
              {
                key: false,
                title: 'No'
              },
              {
                key: true,
                title: 'Yes'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Attachments',
    alias: 'Attachments',
    name: 'attachments',
    valid: true,
    content: [
      {
        title: 'Please Add Required Files:',
        name: 'Add Required Files',
        valid: true,
        content: [
          {
            type: 'list',
            content: [
              'A currently valued general & automobile liability loss runs for the past 5 years. Include detailed claim information for any claim(s) over $250k.',
              'Copies of all underlying policies',
              'A complete list of all named insureds and their operations',
              'A complete schedule of locations'
            ]
          },
          {
            type: 'uploader',
            name: 'requiredFiles',
            description: '',
            width: '100',
            placeholder: 'Drag and drop anywhere on the screen or browse your files.',
            value: ''
          }
        ]
      }
    ]
  }
]
