import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  X,
  Briefcase,
  GraduationCap,
  Calendar
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const jobOpenings = [
  // (same array as your original code — unchanged)
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Marketing', 'Data'];

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null,
  });

  const filteredJobs = selectedDepartment === 'All' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData, selectedJob);
    setShowApplicationModal(false);
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <section id="careers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-[#2D6BE1] to-[#5AB6F8] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of technology. Join us in creating innovative solutions
            and making a meaningful impact on businesses worldwide.
          </p>
        </motion.div>

        {/* Company Culture */}
        {/* (unchanged) */}

        {/* Department Filter */}
        {/* (unchanged) */}

        {/* Job Listings */}
        {/* (unchanged except no TS types) */}

        {/* Application Modal */}
        {showApplicationModal && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowApplicationModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Apply for {selectedJob.title}
                    </h3>
                    <p className="text-gray-600">{selectedJob.department} • {selectedJob.location}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowApplicationModal(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  {/* Form fields — unchanged except no TS types */}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Job Details Modal */}
        {selectedJob && !showApplicationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Job details modal — unchanged except no TS types */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
