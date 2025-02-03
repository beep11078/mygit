import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Brain, Clock, Battery, Lightbulb, Target, ThumbsUp } from 'lucide-react';

const TimeExplorationTemplate = () => {
  const [date] = useState(new Date().toLocaleDateString());
  
  return (
    <div className="space-y-4 p-4">
      {/* Daily Log */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>일간 기록 - {date}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Time Perception */}
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <Clock className="h-5 w-5" />
                시간 인식 체크
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded border p-3">
                  <div className="text-sm text-gray-500">예상 소요 시간</div>
                  <div className="text-lg font-bold">30분</div>
                </div>
                <div className="rounded border p-3">
                  <div className="text-sm text-gray-500">실제 소요 시간</div>
                  <div className="text-lg font-bold">45분</div>
                </div>
              </div>
              <div className="mt-2 rounded bg-blue-50 p-3">
                <p className="text-sm">시간 차이: +15분 / 메타인지: 예상보다 더 깊이 몰입했던 것 같아</p>
              </div>
            </div>

            {/* Energy & Focus Levels */}
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <Battery className="h-5 w-5" />
                에너지 & 집중력 트래커
              </h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">아침</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-xs">에너지</div>
                      <div className="text-lg font-bold">7/10</div>
                    </div>
                    <div>
                      <div className="text-xs">집중</div>
                      <div className="text-lg font-bold">8/10</div>
                    </div>
                  </div>
                </div>
                {/* Similar blocks for 점심, 저녁, 밤 */}
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">점심</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-xs">에너지</div>
                      <div className="text-lg font-bold">6/10</div>
                    </div>
                    <div>
                      <div className="text-xs">집중</div>
                      <div className="text-lg font-bold">5/10</div>
                    </div>
                  </div>
                </div>
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">저녁</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-xs">에너지</div>
                      <div className="text-lg font-bold">8/10</div>
                    </div>
                    <div>
                      <div className="text-xs">집중</div>
                      <div className="text-lg font-bold">7/10</div>
                    </div>
                  </div>
                </div>
                <div className="rounded border p-2">
                  <div className="text-sm text-gray-500">밤</div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-xs">에너지</div>
                      <div className="text-lg font-bold">4/10</div>
                    </div>
                    <div>
                      <div className="text-xs">집중</div>
                      <div className="text-lg font-bold">3/10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Activities with Meta-cognition */}
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <Brain className="h-5 w-5" />
                활동 & 메타인지
              </h3>
              <div className="space-y-3">
                <div className="rounded border p-3">
                  <div className="flex justify-between">
                    <span className="font-medium">10:00 - 유튜브 시청</span>
                    <span className="text-gray-500">1시간</span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">행동 관찰:</span> 아침에는 바로 일하기 어려운가봐
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">감정 상태:</span> 약간 불안하고 시작이 어려웠음
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">대체 생각:</span> 이건 실패가 아닌 내 패턴을 이해하는 과정
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Daily Insights */}
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <Lightbulb className="h-5 w-5" />
                오늘의 통찰
              </h3>
              <div className="rounded border p-3 space-y-2">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">패턴 발견</h4>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <p>창가 자리에서 집중이 더 잘되는 것 같다</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">시간 왜곡 순간</h4>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    <p>SNS 체크할 때 시간 감각을 잃는 경향이 있음</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Next Actions */}
            <div className="space-y-2">
              <h3 className="flex items-center gap-2 font-semibold">
                <Target className="h-5 w-5" />
                다음 실험 & 전략
              </h3>
              <div className="rounded border p-3 space-y-3">
                <div>
                  <h4 className="text-sm font-medium">시도해볼 전략</h4>
                  <p>아침 스트레칭 15분 + 타이머 설정</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium">시간 앵커 설정</h4>
                  <p>점심 식사 후 10분 명상 시도</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Weekly Review */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ThumbsUp className="h-5 w-5" />
            주간 회고
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">시간 관리 개선점</h3>
              <div className="rounded border p-3 space-y-2">
                <p>가장 정확했던 시간 예측: 오전 업무 시간</p>
                <p>자주 발생한 왜곡: SNS 사용 시간</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">다음 주 실험</h3>
              <div className="rounded border p-3 space-y-2">
                <p>시간 블록 설정: 25분 작업 + 5분 휴식</p>
                <p>타이머 사용: SNS 사용 시 항상 설정</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimeExplorationTemplate;
